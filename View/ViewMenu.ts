export function menuForStudent(): void {

    console.log("========================================");
    console.log("---------- STUDENT MANAGEMENT ----------");
    console.log("  STUDENT LIST MANAGEMENT");
    console.log("========================================");
    console.log("  1. ADD STUDENT");
    console.log("  2. SEARCH BY NAME");
    console.log("  3. SEARCH BY GROUP");
    console.log("  4. SHOW ALL STUDENT");
    console.log("  5. SHOW RANK");
    console.log("  6. Exit");

}

export function menuManagementFeatures(): void {

    console.log("==================================");
    console.log("  MANAGEMENT FEATURES");
    console.log("==================================");
    console.log("  1. Update");
    console.log("  2. Delete");
    console.log("  3. Back to");
    console.log("==================================");

}

export function menuUpdateInfoStudent(): void {

}

export function menuDetele(printConsole: string): void {

    console.log('========================================');
    console.log(`  DELETE ${String(printConsole).toUpperCase()}`);
    console.log('========================================');

}


export function menuShow(printConsole: string): void {

    console.log("========================================");
    console.log(`  SHOW ${String(printConsole).toUpperCase()}`);

}

export function menuCreate(printConsole: string): void {

    console.log("========================================");
    console.log(`  NEW ${String(printConsole).toUpperCase()}`);
    console.log("========================================");


}