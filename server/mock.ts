export interface PeriodicElement {
  position: number;
  weight: number;
  symbol: string;
}

// export const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 12, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 15, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 21, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 22, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 23, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 24, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 25, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 26, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 27, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 28, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 29, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 30, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 31, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 32, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 33, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 34, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 35, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 36, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 37, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 38, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 39, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 40, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 41, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 42, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 43, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 44, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 45, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 46, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 47, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 48, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 49, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 50, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 51, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 52, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 53, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 54, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 55, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 56, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 57, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 58, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 59, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 60, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 61, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 62, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 63, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 64, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 65, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 66, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 67, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 68, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 69, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 70, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 71, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 72, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 73, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 74, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 75, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 76, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 77, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 78, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 79, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 80, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 81, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 82, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 83, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 84, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 85, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 86, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 87, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 88, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 89, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 90, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 91, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 92, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 93, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 94, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 95, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 96, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 97, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 98, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 99, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 100, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 101, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 102, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 103, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 104, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 105, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 106, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 107, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 108, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 109, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 110, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 111, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 112, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 113, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 114, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 115, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 116, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 117, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 118, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 119, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 120, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 121, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 122, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 123, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 124, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 125, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 126, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 127, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 128, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 129, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 130, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 131, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 132, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 133, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 134, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 135, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 136, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 137, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 138, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 139, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 140, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 141, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 142, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 143, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 144, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 145, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 146, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 147, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 148, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 149, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 150, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 151, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 152, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 153, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 154, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 155, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 156, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 157, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 158, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 159, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 160, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 161, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 162, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 163, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 164, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 165, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 166, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 167, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 168, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 169, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 170, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 171, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 172, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 173, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 174, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 175, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 176, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 177, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 178, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 179, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 180, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 181, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 182, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 183, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 184, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 185, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 186, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 187, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 188, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 189, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 190, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 191, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 192, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 193, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 194, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 195, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 196, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 197, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 198, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 199, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 200, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 201, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 202, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 203, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 204, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 205, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 206, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 207, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 208, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 209, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 210, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 211, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 212, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 213, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 214, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 215, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 216, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 217, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 218, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 219, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 220, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 221, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 222, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 223, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 224, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 225, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 226, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 227, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 228, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 229, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 230, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 231, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 232, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 233, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 234, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 235, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 236, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 237, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 238, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 239, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 240, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 241, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 242, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 243, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 244, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 245, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 246, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 247, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 248, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 249, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 250, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 251, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 252, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 253, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 254, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 255, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 256, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 257, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 258, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 259, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 260, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 261, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 262, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 263, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 264, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 265, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 266, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 267, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 268, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 269, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 270, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 271, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 272, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 273, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 274, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 275, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 276, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 277, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 278, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 279, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 280, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 281, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 282, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 283, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 284, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 285, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 286, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 287, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 288, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 289, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 290, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 291, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 292, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 293, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 294, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 295, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 296, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 297, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 298, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 299, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 300, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 301, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 302, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 303, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 304, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 305, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 306, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 307, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 308, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 309, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 310, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 311, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 312, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 313, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 314, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 315, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 316, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 317, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 318, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 319, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 320, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 321, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 322, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 323, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 324, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 325, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 326, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 327, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 328, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 329, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 330, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 331, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 332, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 333, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 334, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 335, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 336, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 337, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 338, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 339, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 340, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 341, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 342, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 343, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 344, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 345, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 346, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 347, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 348, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 349, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 350, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 351, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 352, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 353, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 354, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 355, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 356, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 357, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 358, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 359, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 360, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 361, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 362, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 363, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 364, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 365, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 366, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 367, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 368, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 369, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 370, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 371, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 372, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 373, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 374, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 375, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 376, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 377, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 378, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 379, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 380, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 381, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 382, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 383, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 384, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 385, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 386, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 387, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 388, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 389, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 390, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 391, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 392, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 393, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 394, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 395, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 396, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 397, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 398, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 399, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 400, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
// ];
