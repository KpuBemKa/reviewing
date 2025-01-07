/** @odoo-module */

import { registry } from "@web/core/registry";
import { CharField, charField } from "@web/views/fields/char/char_field";

class KsAudio extends CharField {
    static template = "audio.audio_widget";
    static props = {...CharField.props,};

    get audioUrl() {
        console.log(this.props);
        return `/web/content/${this.props.record.model.config.resModel}/${this.props.record.data.id}/${this.props.name}`;
    }
}
export const ksAudio = {...charField, component: KsAudio,};
registry.category("fields").add("audio", ksAudio);
