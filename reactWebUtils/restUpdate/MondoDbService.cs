using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;

namespace restUpdate
{

    //https://www.codeproject.com/Articles/1077319/Csharp-MongoDB-Polymorphic-Collections-with-Generi

    public interface IMongoDbService
    {
        IMongoDatabase Database { get; }
    }

    public class MongoDbService : IMongoDbService
    {
        readonly MongoClient _client;
        readonly IMongoDatabase _db;
        public MongoDbService(string connectionString, string Database)
        {
            _client = new MongoClient(connectionString);
            _db = _client.GetDatabase(Database);
        }

        public IMongoDatabase Database { get { return _db; } }
    }
}