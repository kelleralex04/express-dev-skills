const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skill Levels'
    });
};

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Individual Skill Level'
    });
};

function newSkill(req, res) {
    res.render('skills/new', {
        title: 'Add New Skill'
    })
}