/*Her laves det store regnestykke for prisen så, med de priser der 
passer til bilen.*/ 
class TaxaPriceStrategy {
    beregnPris(TidIMin, AfstandKm) {
        if(AfstandKm <= 1) {
            return (5 *(AfstandKm)) + (6.25 * TidIMin) + 39;
        }else{    
            return ((9 * (AfstandKm-1))+5) + (6.25 * TidIMin) + 39;
        }
    }
}
start(new Taxameter(clock, new TaxaPriceStrategy()));
//return (9 * (turAfstand)) + (6.25 * turTidMinutter) + 39; 