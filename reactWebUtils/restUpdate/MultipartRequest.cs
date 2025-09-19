using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Net.Http.Headers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace restUpdate
{

    public class MultiPartFile
    {
        public String FileName { get; set; }
        public String ContentType { get; set; }
        public Stream uploadStream { get; set; }
    }

    public interface IMultipartRequestHandler
    {
        IEnumerable<MultiPartFile> fromMultipart(ControllerBase controller);
    }

    public class MultipartRequestHandler : IMultipartRequestHandler
    {
        static bool IsMultipartContentType(string contentType)
        {
            return !string.IsNullOrEmpty(contentType)
                   && contentType.IndexOf("multipart/", StringComparison.OrdinalIgnoreCase) >= 0;
        }

        static string GetBoundary(MediaTypeHeaderValue contentType, int lengthLimit)
        {
            var boundary = HeaderUtilities.RemoveQuotes(contentType.Boundary).ToString();
            if (string.IsNullOrWhiteSpace(boundary))
            {
                throw new InvalidDataException("Missing content-type boundary.");
            }

            if (boundary.Length > lengthLimit)
            {
                throw new InvalidDataException(
                    $"Multipart boundary length limit {lengthLimit} exceeded.");
            }

            return boundary;
        }

        // Get the default form options so that we can use them to set the default limits for
        // request body data
        private static readonly FormOptions _defaultFormOptions = new FormOptions();

        static bool HasFileContentDisposition(ContentDispositionHeaderValue contentDisposition)
        {
            // Content-Disposition: form-data; name="myfile1"; filename="Misc 002.jpg"
            return contentDisposition != null
                   && contentDisposition.DispositionType.Equals("form-data")
                   && (!string.IsNullOrEmpty(contentDisposition.FileName.ToString())
                       || !string.IsNullOrEmpty(contentDisposition.FileNameStar.ToString()));
        }

        static bool HasFormDataContentDisposition(ContentDispositionHeaderValue contentDisposition)
        {
            // Content-Disposition: form-data; name="key";
            return contentDisposition != null
                   && contentDisposition.DispositionType.Equals("form-data")
                   && string.IsNullOrEmpty(contentDisposition.FileName.ToString())
                   && string.IsNullOrEmpty(contentDisposition.FileNameStar.ToString());
        }

        private static Encoding GetEncoding(MultipartSection section)
        {
            MediaTypeHeaderValue mediaType;
            var hasMediaTypeHeader = MediaTypeHeaderValue.TryParse(section.ContentType, out mediaType);
            // UTF-7 is insecure and should not be honored. UTF-8 will succeed in 
            // most cases.
            if (!hasMediaTypeHeader || Encoding.UTF7.Equals(mediaType.Encoding))
            {
                return Encoding.UTF8;
            }
            return mediaType.Encoding;
        }



        public IEnumerable<MultiPartFile> fromMultipart(ControllerBase controller)
        {
            var Request = controller.Request;

            if (!IsMultipartContentType(Request.ContentType))
            {
            throw new reactBase.ExceptionWithCode($"Expected a multipart request, but got {Request.ContentType}");
            }

            var boundary = GetBoundary(
                MediaTypeHeaderValue.Parse(Request.ContentType),
                _defaultFormOptions.MultipartBoundaryLengthLimit);
            var reader = new MultipartReader(boundary, Request.Body);


            var section = reader.ReadNextSectionAsync().Result;


            while (section != null)
            {
                ContentDispositionHeaderValue contentDisposition;
                var hasContentDispositionHeader = ContentDispositionHeaderValue.TryParse(
                                                        section.ContentDisposition, out contentDisposition);

                if (hasContentDispositionHeader)
                {
                    if (HasFileContentDisposition(contentDisposition))
                    {
                        yield return new MultiPartFile
                        {
                            ContentType = section.ContentType,
                            FileName = (contentDisposition.FileName.ToString() ?? "").Trim(new[] { '"', '\'' }),
                            uploadStream = section.Body
                        };

                        //await section.Body.CopyToAsync(targetStream);
                    }
                    /* we are ignoring NON file upload cases
                    else if (HasFormDataContentDisposition(contentDisposition))
                    {
                        // Content-Disposition: form-data; name="key"
                        //
                        // value

                        // Do not limit the key name length here because the 
                        // multipart headers length limit is already in effect.
                        var key = HeaderUtilities.RemoveQuotes(contentDisposition.Name);
                        var encoding = GetEncoding(section);
                        using (var streamReader = new StreamReader(
                            section.Body,
                            encoding,
                            detectEncodingFromByteOrderMarks: true,
                            bufferSize: 1024,
                            leaveOpen: true))
                        {
                            // The value length limit is enforced by MultipartBodyLengthLimit
                            var value = await streamReader.ReadToEndAsync();
                            if (String.Equals(value, "undefined", StringComparison.OrdinalIgnoreCase))
                            {
                                value = String.Empty;
                            }

                            //formAccumulator.Append(key, value);
                            //We are not colleting this information

                            
                        }
                    }
                    else
                    {
                        throw new Exception("Unknown multipart disposition");
                    }*/
                }

                // Drains any remaining section body that has not been consumed and
                // reads the headers for the next section.
                section = reader.ReadNextSectionAsync().Result;
            }


        }



    }

    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class DisableFormValueModelBindingAttribute : Attribute, Microsoft.AspNetCore.Mvc.Filters.IResourceFilter
    {
        public void OnResourceExecuting(Microsoft.AspNetCore.Mvc.Filters.ResourceExecutingContext context)
        {
            var formValueProviderFactory = context.ValueProviderFactories
                .OfType<Microsoft.AspNetCore.Mvc.ModelBinding.FormValueProviderFactory>()
                .FirstOrDefault();
            if (formValueProviderFactory != null)
            {
                context.ValueProviderFactories.Remove(formValueProviderFactory);
            }

            var jqueryFormValueProviderFactory = context.ValueProviderFactories
                .OfType<Microsoft.AspNetCore.Mvc.ModelBinding.JQueryFormValueProviderFactory>()
                .FirstOrDefault();
            if (jqueryFormValueProviderFactory != null)
            {
                context.ValueProviderFactories.Remove(jqueryFormValueProviderFactory);
            }
        }

        public void OnResourceExecuted(Microsoft.AspNetCore.Mvc.Filters.ResourceExecutedContext context)
        {
        }
    }
}
