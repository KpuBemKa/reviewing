// /** @odoo-module **/

// import { _t } from "@web/core/l10n/translation";
// import { TextField } from "@web/views/fields/text/text_field";
// import { registry } from "@web/core/registry";
// import { useState } from "@odoo/owl";

// export class ExpandableTextField extends TextField {
//     // static props = {
//     //     ...super.props,
//     //     maxLength: { type: Number, optional: true },
//     // };

//     setup() {
//         super.setup();

//         // this.maxLength = this.props.maxLength || 100;
//         // console.log(this.maxLength);
//         console.log(this.props);
//         this.isOverflowing = false;

//         this.state = useState({
//             isExpanded: false,
//         });
//     }

//     toggleExpand() {
//         this.state.isExpanded = !this.state.isExpanded;
//     }

//     mounted() {
//         // Check overflow after the widget has been mounted
//         this._checkOverflow();
//     }

//     // Method to check if text overflows the cell
//     _checkOverflow() {
//         const textContainer = this.el.querySelector('.text-content');
//         if (textContainer) {
//             this.isOverflowing = textContainer.scrollWidth > textContainer.clientWidth;
//             this.render();
//         }
//     }

//     get displayText() {
//         return this.getFieldValue();
//         // const text = this.getFieldValue();

//         // if (this.state.isExpanded) {
//         //     return text;
//         // } else {
//         //     // Characters to show when collapsed
//         //     return text.length > this.props.maxLength ? text.slice(0, this.props.maxLength) + "..." : text;
//         // }
//     }

//     get canExpand() {
//         // return this.getFieldValue().length > this.props.maxLength; // Show expand/collapse button only for long texts
//         return this.isOverflowing;
//     }

//     get isExpanded() {
//         return this.state.isExpanded;
//     }

//     getFieldValue() {
//         return this.props.record.data[this.props.name] || "" // Ensure fallback for null/undefined values
//     }
// }

// export const expandableTextField = {
//     component: ExpandableTextField,
//     displayName: _t("Expandable Multiline Text"),

//     // supportedTypes: ["html", "text"],
//     // extractProps: ({ attrs, options }) => ({
//     //     maxLength: options?.max_length !== undefined ? Number(options.max_length) : 100,
//     // }),
// };

// // // Define a registry entry for the custom field
// // export const ExpandableTextFieldDefinition = {
// //     ...TextField,
// //     component: ExpandableTextField,
// // };

// ExpandableTextField.template = "ExpandableTextFieldTemplate"; // Link to the template
// registry.category("fields").add("expandable_text", expandableTextField);
// /** @odoo-module **/

// import { _t } from "@web/core/l10n/translation";
// import { TextField } from "@web/views/fields/text/text_field";
// import { registry } from "@web/core/registry";
// import { useState } from "@odoo/owl";

// export class ExpandableTextField extends TextField {
//     setup() {
//         super.setup();

//         this.state = useState({
//             isExpanded: false,
//         });
//     }

//     toggleExpand() {
//         this.state.isExpanded = !this.state.isExpanded;
//     }

//     mounted() {
//         // Check overflow after the widget has been mounted
//         this._checkOverflow();
//     }

//     // Method to check if text overflows the cell
//     _checkOverflow() {
//         const textContainer = this.el.querySelector('.text-content');
//         if (textContainer) {
//             this.isOverflowing = textContainer.scrollWidth > textContainer.clientWidth;
//             this.render();
//         }
//     }

//     get displayText() {
//         return this.getFieldValue();
//     }

//     get canExpand() {
//         // return this.getFieldValue().length > this.props.maxLength; // Show expand/collapse button only for long texts
//         return this.isOverflowing;
//     }

//     get isExpanded() {
//         return this.state.isExpanded;
//     }

//     getFieldValue() {
//         return this.props.record.data[this.props.name] || "" // Ensure fallback for null/undefined values
//     }
// }

// export const expandableTextField = {
//     component: ExpandableTextField,
//     displayName: _t("Expandable Multiline Text"),
// };

// ExpandableTextField.template = "ExpandableTextFieldTemplate"; // Link to the template
// registry.category("fields").add("expandable_text", expandableTextField);
/** @odoo-module **/

// import { _t } from "@web/core/l10n/translation";
// import { TextField } from "@web/views/fields/text/text_field";
// import { registry } from "@web/core/registry";
// import { useState, useRef, onMounted, useEffect } from "@odoo/owl";

// export class ExpandableTextField extends TextField {
//     setup() {
//         super.setup();

//         this.state = useState({
//             isExpanded: false, // Tracks whether the text is expanded
//             isOverflowing: false, // Tracks whether the text is overflowing
//         });

//         this.textContainerRef = useRef("textContainer"); // Reference to the text container
//         // console.log(this.textContainerRef)

//         onMounted(() => {
//             console.log("Component mounted!");
//             this.checkOverflow();
//         });

//         useEffect(() => {
//             console.log("Component mounted or updated!");
//             this.checkOverflow();
//         });
//     }

//     toggleExpand() {
//         this.state.isExpanded = !this.state.isExpanded;
//     }


//     checkOverflow() {
//         const textContainer = this.textContainerRef.el;
//         if (textContainer) {
//             this.state.isOverflowing =
//                 textContainer.scrollWidth > textContainer.getBoundingClientRect().width;
//                 // textContainer.scrollWidth > textContainer.offsetWidth;
//             console.log(textContainer.scrollWidth + " " + textContainer.offsetWidth)
//         }
//     }

//     get displayText() {
//         return this.props.record.data[this.props.name] || ""; // Fallback for empty values
//     }

//     get shouldShowButton() {
//         return this.state.isOverflowing;
//     }
// }

// export const expandableTextField = {
//     component: ExpandableTextField,
//     displayName: _t("Expandable Multiline Text"),
// };

// ExpandableTextField.template = "ExpandableTextFieldTemplate"; // Link to the template
// registry.category("fields").add("expandable_text", expandableTextField);

/** @odoo-module **/

import { _t } from "@web/core/l10n/translation";
import { TextField } from "@web/views/fields/text/text_field";
import { registry } from "@web/core/registry";
import { useState, useRef, onMounted, onWillUnmount } from "@odoo/owl";

export class ExpandableTextField extends TextField {
    setup() {
        super.setup();

        this.state = useState({
            isExpanded: false,
            isOverflowing: false,
        });

        this.textContainerRef = useRef("textContainer");
        this.resizeObserver = null;

        onMounted(() => {
            this.initializeResizeObserver();
        });

        onWillUnmount(() => {
            if (this.resizeObserver) {
                this.resizeObserver.disconnect();
            }
        });
    }

    initializeResizeObserver() {
        const textContainer = this.textContainerRef.el;

        if (!textContainer) return;

        const checkOverflow = () => {
            if (!textContainer.offsetParent) return; // Ensure element is visible

            const isOverflowing =
                textContainer.scrollWidth > textContainer.clientWidth ||
                textContainer.scrollHeight > textContainer.clientHeight;

            if (isOverflowing !== this.state.isOverflowing) {
                this.state.isOverflowing = isOverflowing;
            }
        };

        // Perform an initial overflow check
        checkOverflow();

        // Observe the text container for resize events
        this.resizeObserver = new ResizeObserver(() => checkOverflow());
        this.resizeObserver.observe(textContainer);
    }

    toggleExpand() {
        // ev.stopPropagation(); // Prevent the click from bubbling up
        this.state.isExpanded = !this.state.isExpanded;
    }

    get displayText() {
        return this.props.record.data[this.props.name] || "";
    }

    get canExpand() {
        // if (this.state.isExpanded) return true;

        // console.log(this.state.isExpanded || this.state.isOverflowing);
        return this.state.isExpanded || this.state.isOverflowing;
    }
}

ExpandableTextField.template = "ExpandableTextFieldTemplate";

export const expandableTextField = {
    component: ExpandableTextField,
    displayName: _t("Expandable Multiline Text"),
};

registry.category("fields").add("expandable_text", expandableTextField);
