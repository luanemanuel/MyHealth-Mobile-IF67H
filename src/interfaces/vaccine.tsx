interface VaccineInterface {
    id: string;
    vaccineName: string;
    vaccineImage: string;
    vaccineDate: Date;
    vaccineDose: string;
    vaccineNextDose: Date | null;
}

export class Vaccine implements VaccineInterface {
    id: string;
    vaccineName: string;
    vaccineImage: string;
    vaccineDate: Date;
    vaccineDose: string;
    vaccineNextDose: Date | null;

    constructor(id: string, vaccineName: string, vaccineImage: string, vaccineDate: Date, vaccineDose: string, vaccineNextDose: Date | null) {
        this.id = id;
        this.vaccineName = vaccineName;
        this.vaccineImage = vaccineImage;
        this.vaccineDate = vaccineDate;
        this.vaccineDose = vaccineDose;
        this.vaccineNextDose = vaccineNextDose;
    }
}