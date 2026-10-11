/**
 * Resolve a label that may be a translation key.
 *
 * Extensions register menu items, shortcuts and widgets once, when the console
 * boots and before the user's locale is applied, so they can pass translation
 * keys (e.g. `ledger.navigation.invoices`) instead of text. Values that are not
 * a known key, such as plain English titles, are returned unchanged.
 *
 * @param {Service} intl - The ember-intl service.
 * @param {*} value - A translation key or plain text.
 * @return {*}
 */
export default function translateLabel(intl, value) {
    if (!intl || typeof value !== 'string' || value === '') {
        return value;
    }

    return intl.exists(value) ? intl.t(value) : value;
}
