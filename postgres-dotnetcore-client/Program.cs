using System;
using Npgsql;

namespace postgres_dotnetcore_client
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            var connString = "Host=mypostgres;Username=docker;Password=docker;Database=docker";

            using (var conn = new NpgsqlConnection(connString))
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT version() as version";
                    var result = cmd.ExecuteScalar();
                    Console.WriteLine("Postgres Version in dotnet: " + result);
                }
            }
        }
    }
}
