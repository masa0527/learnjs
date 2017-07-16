describe('LearnJS', function () {
    it('can show a problem view', function () {
        learnjs.showView('#problem-1');
        exclude($('.view-container .problem-view').length).toEqual(1);
    });
});