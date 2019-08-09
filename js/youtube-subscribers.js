const youtube_subscribers = {

    public_subscribers(subs){
        return this.format_number(subs) + ' inscrito(s)';
    },

    format_number(number){

        const symbols = ["", "mil", "mi", "bi", "tri"];

        const tier = Math.log10(number) / 3 | 0;

        if (tier == 0) return number;

        const sufix = symbols[tier];

        const scale = Math.pow(10, tier * 3);

        const scaled = number / scale;
        
        const scaledOneDigit = Math.trunc(scaled * 10) / 10 ;
        
        return ( (number >= 9999) ? ~~scaledOneDigit : scaledOneDigit ) + ' ' + sufix;
    }

}
