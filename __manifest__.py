{
    "name": "Reviewing",
    "version": "0.1",
    "depends": ["base"],
    "author": "MARS dev",
    "category": "Category",
    "application": True,
    "data": [
        "security/ir.model.access.csv",
        # ---
        "views/recordings_views.xml",
        "views/recordings_menu.xml",
    ],
    "controllers": ["controllers.main_controller.MainController"],
}
