using Microsoft.IdentityModel.Tokens;
using System.Collections.Concurrent;

namespace Backend.Services
{
    public class TokenReplayCache : ITokenReplayCache
    {
        private readonly ConcurrentDictionary<string, DateTime> _tokens = new ConcurrentDictionary<string, DateTime>();

        public bool TryAdd(string securityToken, DateTime expiresOn)
        {
            return _tokens.TryAdd(securityToken, expiresOn);
        }

        public bool TryFind(string securityToken)
        {
            if (_tokens.TryGetValue(securityToken, out var expiresOn))
            {
                if (expiresOn > DateTime.UtcNow)
                {
                    return true;
                }
                _tokens.TryRemove(securityToken, out _);
            }
            return false;
        }
    }
}
