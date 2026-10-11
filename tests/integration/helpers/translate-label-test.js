import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';

class SelectiveIntlService extends Service {
    messages = { 'smart-nav-menu.extensions': 'Extensões' };

    exists(key) {
        return key in this.messages;
    }

    t(key) {
        return this.messages[key];
    }
}

module('Integration | Helper | translate-label', function (hooks) {
    setupRenderingTest(hooks);

    hooks.beforeEach(function () {
        this.owner.register('service:intl', SelectiveIntlService);
    });

    test('it renders the translation of a known key', async function (assert) {
        this.set('value', 'smart-nav-menu.extensions');

        await render(hbs`{{translate-label this.value}}`);

        assert.dom(this.element).hasText('Extensões');
    });

    test('it renders plain text as-is', async function (assert) {
        this.set('value', 'Fleet-Ops');

        await render(hbs`{{translate-label this.value}}`);

        assert.dom(this.element).hasText('Fleet-Ops');
    });
});
