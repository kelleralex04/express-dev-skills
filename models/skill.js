const skills = [
    {id: 1, skill: 'HTML', level: 6},
    {id: 2, skill: 'CSS', level: 5},
    {id: 3, skill: 'JavaScript', level: 8},
    {id: 4, skill: 'Python', level: 3}
];

idMax = 4

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    getSkill,
    update
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

function create(skill) {
    idMax += 1
    skill.id = idMax 
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function getSkill(id) {
    id = parseInt(id) - 1;
    skillName = skills[id].skill;
    level = skills[id].level;
}

function update(id, formData) {
    const skill = getOne(id);
    skill.skill = formData.name;
    skill.level = formData.level;
}