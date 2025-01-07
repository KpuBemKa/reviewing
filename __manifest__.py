{
    "name": "Reviewing",
    "version": "0.1",
    "depends": ["base", "web"],
    "author": "MARS dev",
    "category": "Category",
    "application": True,
    "data": [
        "security/ir.model.access.csv",
        # ---
        "views/recordings_menu.xml",
        "views/recordings_views.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "reviewing/static/src/scss/expandable_text.scss",
            "reviewing/static/src/scss/style.scss",
            # ---
            "reviewing/static/src/js/expandable_text.js",
            "reviewing/static/src/js/audio_field.js",
            # ---
            "reviewing/static/src/xml/expandable_text.xml",
            "reviewing/static/src/xml/audio_field.xml",
        ],
    },
    "controllers": ["controllers.main_controller.MainController"],
}
