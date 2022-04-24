using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieRating.Core.Eccezzioni
{
   
        public class NotFoundUserId : Exception
        {
            public NotFoundUserId(int userId) : base($"Nessun commento trovato. User Id '{userId}' inesistente.") { }
        }
    }

