using commonInterfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using reactBase;
using RedLockNet;
using RedLockNet.SERedis;
using RedLockNet.SERedis.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Utilities
{

    public class RedLockService : IDisposable, IDistributedLockService
    {
        readonly RedLockFactory _factory;
        public RedLockService(
            IConfiguration configuration,
            ILogger<RedLockService> logger
            )
        {
            var redisConnection = configuration["redis:Configuration"];
            if (string.IsNullOrWhiteSpace(redisConnection))
                throw new Exception("redis:Configuration is not configured");

            var split = redisConnection.Split(':');

            var host = split.First();
            var port = "6379";

            if (split.Length > 1)
            {
                port = split[1];
            }


            var endPoints = new List<RedLockEndPoint>
            {
                new DnsEndPoint(host, int.Parse(port)),
            };

            _factory = RedLockFactory.Create(endPoints);

        }


        public async Task<ITheLock<T>> withLock<T>(Func<Task<T>> createModelDelegate, TimeSpan? wait = null, TimeSpan? expiry = null) where T : IHasId, IHasCreated
        {
            var model = await createModelDelegate();

            var key = $"lockedResource:{typeof(T).Name}:{model.id}";

            var redLock = await _factory.CreateLockAsync(key, expiry ?? TimeSpan.FromMinutes(5), wait ?? TimeSpan.FromSeconds(60), TimeSpan.FromSeconds(5));
            // make sure we got the lock
            if (!redLock.IsAcquired)
            {
                redLock.Dispose();
                throw new ExceptionWithCode("A resource your require is being used by someone else. Please try later", HttpStatusCode.Conflict, reason: "resource_locked");
            }

            return new RedLockHolder<T>(
                redLock,

                //We call this again to read the model after the lock has been created
                await createModelDelegate()
                );

        }

        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    _factory.Dispose();
                }
                disposedValue = true;
            }
        }



        // This code added to correctly implement the disposable pattern.
        public void Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            // GC.SuppressFinalize(this);
        }
        #endregion
    }

    public class RedLockHolder<T> : ITheLock<T> where T : IHasId, IHasCreated
    {
        readonly IRedLock _lock;
        readonly T _model;
        public RedLockHolder(IRedLock thelock, T model)
        {
            _lock = thelock;
            _model = model;
        }

        public T lockedObject { get { return _model; } }
        public string lockedObjecId { get { return _model.id; } }


        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls


        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    _lock.Dispose();
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources.
        // ~RedLockHolder() {
        //   // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        //   Dispose(false);
        // }

        // This code added to correctly implement the disposable pattern.
        public void Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            // GC.SuppressFinalize(this);
        }
        #endregion
    }
}
