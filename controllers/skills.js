const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
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
    });
};

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
};

function edit(req, res) {
    Skill.getSkill(req.params.id)
    res.render('skills/edit', {
        title: 'Edit Skill',
        skill: Skill.getOne(req.params.id)
    });
}

function update(req, res) {
    Skill.update(req.params.id, req.body)
    res.redirect(`/skills/${req.params.id}`);
}