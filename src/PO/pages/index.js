const AbouthPage = require('./about.page');
const DashboardPage = require('./dashboard.page');
const DoctorsPage = require('./doctors.page');
const PatientPage = require('./patient.page');
const PreferencePage = require('./preference.page');
const SchedulePage = require('./schedule.page');

/**
 *
 * @param {'abouth' | 'dashboard' | 'doctors' | 'patients' | 'preference' | 'schedule' } name
 * @return {AbouthPage | DashboardPage | DoctorsPage | PatientPage | PreferencePage | SchedulePage}
 */
function pages(name) {
    const page = {
        abouth: new AbouthPage(),
        dashboard: new DashboardPage(),
        doctors: new DoctorsPage(),
        patients: new PatientPage(),
        preference: new PreferencePage(),
        schedule: new SchedulePage(),
    };

    return page[name.toLowerCase()];
}

module.exports = {
    AbouthPage,
    DashboardPage,
    DoctorsPage,
    PatientPage,
    PreferencePage,
    SchedulePage,
    pages,
};
