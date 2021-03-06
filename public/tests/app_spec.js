describe('LearnJS', function () {
    it('can show a problem view', function () {
        learnjs.showView('#problem-1');
        expect($('.view-container .problem-view').length).toEqual(1);
    });

    it('show the landing page view when there is no hash', function () {
        learnjs.showView('');
        expect($('.view-container .landing-view').length).toEqual(1);
    });

    it('passes the hash view parameter to the view function', function () {
        spyOn(learnjs, 'problemView');
        learnjs.showView('#problem-42');
        expect(learnjs.problemView).toHaveBeenCalledWith('42');
    });

    describe('problem view', function () {
        var view;
        beforeEach(function () {
            view = learnjs.problemView('1');
        });
        it('has a title that includes the problem number', function () {
            expect(view.find('.title').text()).toEqual('Problem #1');
        });

        it('show the description', function () {
            expect(view.find('[data-name="description"]').text()).toEqual('What is truth?');
        });

        it('show the problem code', function () {
            expect(view.find('[data-name="code"]').text()).toEqual('function problem() { return __ ; }');
        });
    });

    it('invokes the router when loaded', function () {
        spyOn(learnjs, 'showView');
        learnjs.appOnReady();
        expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
    });

    it('subscribes to the hash change event', function () {
        learnjs.appOnReady();
        spyOn(learnjs, 'showView');
        $(window).trigger('hashchange');
        expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
    })
});