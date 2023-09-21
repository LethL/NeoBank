const offerChoosenData = localStorage.getItem('offersData');
const jsonData = offerChoosenData ? JSON.parse(offerChoosenData) : '';
let applicationId: string;
jsonData ? (applicationId = jsonData[0].applicationId) : (applicationId = ' ');

export default applicationId;
