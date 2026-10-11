import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';
import translateLabel from '../utils/translate-label';

/**
 * `{{translate-label @widget.name}}` translates the value when it is a known
 * translation key and returns it unchanged otherwise.
 */
export default class TranslateLabelHelper extends Helper {
    @service intl;

    compute([value]) {
        return translateLabel(this.intl, value);
    }
}
