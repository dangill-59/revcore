using commonInterfaces;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using reactBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Utilities
{
    public interface IDistributedLockService
    {
        /// <summary>
        /// Creates a distributed lock using redis
        /// usage using(var mylock = withLock<T>()){  mylock.lockedObject;   } 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="createModelDelegate_willbecalledMultipleTimes">The Task to create the model</param>
        /// <returns></returns>
        Task<ITheLock<T>> withLock<T>(Func<Task<T>> createModelDelegate_willbecalledMultipleTimes, TimeSpan? wait = null, TimeSpan? expiry = null) where T : IHasId, IHasCreated;
    }



    public interface ITheLock<T> : IDisposable where T : IHasId
    {
        T lockedObject { get; }
        string lockedObjecId { get; }
    }

    public class TheLock<T> : ITheLock<T> where T : IHasId, IHasCreated
    {
        readonly string _key;
        readonly IDistributedCache _cache;
        readonly ILogger _logger;
        readonly T _model;
        readonly string _lockId;

        public TheLock(IDistributedCache cache, string key, T model, string lockId, ILogger logger)
        {
            _logger = logger;
            _lockId = lockId;
            _model = model;
            _key = key;
            _cache = cache;
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
                    try
                    {
                        _cache.Remove(_key);
                        _logger.LogDebug($"removed lock : {_key} lockid:{_lockId}");
                    }
                    catch { }

                }


                disposedValue = true;
            }
        }

        ~TheLock()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(false);
        }

        // This code added to correctly implement the disposable pattern.
        public void Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            GC.SuppressFinalize(this);
        }
        #endregion
    }


}
