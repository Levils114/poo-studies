const username = 'Levi';
const age = 18;
const sex = 'M';
const job = 'Software Developer';

const userES5 = {
    name: username,
    age: age,
    sex: sex,
    job: job,
    showUser: function() {
        console.log(this.name, this.age, this.sex, this.job);
    }
}

const userES6 = {
    username,
    age,
    sex,
    job,
    showUser() {
        console.log(this.username, this.age, this.sex, this.job);
    }
}

module.exports = {userES5, userES6};