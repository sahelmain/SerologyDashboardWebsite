export interface Admin {
    id: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    initials: string;
}

export interface Student {
    id: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    initials: string;
}


export interface ChemistryQCTemplate {
    analyteName: string;
    analyteAcronym: string;
    unitOfMeasure: string;
    minLevel: number;
    maxLevel: number;
    mean: number;
    stdDevi: number;
}

export interface AdminQCLot {
    adminQCLotID?: string;
    qcName: string;
    lotNumber: string;
    openDate: string;
    closedDate: string;
    expirationDate: string;
    fileDate: string;
    Qualitative: boolean;
    analytes: {
        analyteName: string;
        analyteAcronym: string;
        unitOfMeasure: string;
        minLevel: string;
        maxLevel: string;
        mean: string;
        stdDevi: string;
        expectedRange?: string; // Optional value field for qualitative
    }[];
}