import { module, test } from 'qunit';
import translateLabel from '@fleetbase/ember-ui/utils/translate-label';

const messages = { 'ledger.extension.shortcuts.invoices.title': 'Faturas' };
const intl = {
    exists: (key) => key in messages,
    t: (key) => messages[key],
};

module('Unit | Utility | translate-label', function () {
    test('it translates a known translation key', function (assert) {
        assert.strictEqual(translateLabel(intl, 'ledger.extension.shortcuts.invoices.title'), 'Faturas');
    });

    test('it returns plain text unchanged', function (assert) {
        assert.strictEqual(translateLabel(intl, 'Fleet-Ops'), 'Fleet-Ops');
        assert.strictEqual(translateLabel(intl, 'Create, send, and manage customer invoices.'), 'Create, send, and manage customer invoices.');
    });

    test('it passes non-string and empty values through', function (assert) {
        assert.strictEqual(translateLabel(intl, null), null);
        assert.strictEqual(translateLabel(intl, undefined), undefined);
        assert.strictEqual(translateLabel(intl, ''), '');
        assert.strictEqual(translateLabel(intl, 42), 42);
    });

    test('it returns the value when no intl service is available', function (assert) {
        assert.strictEqual(translateLabel(null, 'ledger.extension.shortcuts.invoices.title'), 'ledger.extension.shortcuts.invoices.title');
    });
});
