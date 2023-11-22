const skills = [
    {id: 1, skill: 'HTML', level: 6},
    {id: 2, skill: 'CSS', level: 5},
    {id: 3, skill: 'JavaScript', level: 8},
    {id: 4, skill: 'Python', level: 3}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    console.log(id)
    return skills.find(skill => skill.id === id);
};