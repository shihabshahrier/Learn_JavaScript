our_dic = {
    shihab: 6,
    alif: 2,
    jamil: 10,
    mikdad: function() {
        return (this.jamil - this.shihab)
    }
};
console.log(our_dic.mikdad)