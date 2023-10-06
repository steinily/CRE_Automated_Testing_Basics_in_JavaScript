/**
 * Add a new patient to the patient list.
 *
 * @param {Object} newPatientData - An object containing patient information.
 * @property {number} id - The row id.
 * @property {string} patientName - The patient's name.
 * @property {string} gender - The patient's gender (male/female).
 * @property {string} bloodtype - The patient's blood type (e.g., "AB+", "A+").
 * @property {string} sympthoms - The patient's symptoms.
 * @property {string} phone - The patient's phone number.
 * @property {string} email - The patient's email address.
 */
function addPatient(newPatientData) {
    browser.execute((newPatientData) => {
        /* eslint-disable */
        function add(data) {
            const newRow = document.createElement('tr');
            const body = document.querySelector('tbody:not(.e-hide)');
            const { id, patientName, gender, bloodtype, sympthoms, phone, email } = data;
            newRow.innerHTML = `<tr role="row" class="e-row" aria-rowindex="0" data-uid="grid-row51">
            <td class="e-rowcell" role="gridcell" tabindex="-1" aria-label="1 column header ID" aria-colindex="0" index="0" style="text-align: left;">${String(id)}</td>
            <td class="e-rowcell e-templatecell" role="gridcell" tabindex="-1" aria-label=" is template cell column header Name" aria-colindex="1" index="0" style="text-align: left;">
            <span class="patient-name">${patientName}</span></td>
            <td class="e-rowcell" role="gridcell" tabindex="-1" aria-label="Female column header Gender" aria-colindex="2" index="0" style="text-align: left;">${gender}</td>
            <td class="e-rowcell" role="gridcell" tabindex="-1" aria-label="O+ column header Blood Group" aria-colindex="3" index="0" style="text-align: left;">${bloodtype}</td>
            <td class="e-rowcell e-ellipsistooltip" role="gridcell" tabindex="-1" aria-label="Sweating, Chills and Shivering column header Symptoms" aria-colindex="4" index="0" style="text-align: left;">${sympthoms}</td>
            <td class="e-rowcell" role="gridcell" tabindex="-1" aria-label="(717) 555-4444 column header Mobile Number" aria-colindex="5" index="0" style="text-align: left;">${phone}</td>
            <td class="e-rowcell" role="gridcell" tabindex="-1" aria-label="laura90@mail.com column header Email" aria-colindex="6" index="0" style="text-align: left;">${email}</td>
            </tr>`;

            body.appendChild(newRow);
        }
        /* eslint-enable */
        add(newPatientData);
    }, newPatientData);
}

module.exports = { addPatient };
