// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract MedicalDataRepository {
    struct MedicalData {
        uint id;
        string data;
    }

    MedicalData[] private medicalData;

    function addMedicalData(uint _id, string memory _data) public {
        medicalData.push(MedicalData(_id, _data));
    }

    function getMedicalData(uint _id) public view returns (MedicalData memory) {
        for(uint i = 0; i < medicalData.length; i++) {
            if(medicalData[i].id == _id) {
                return medicalData[i];
            }
        }
        revert("Medical data report not found");
    }

    function getAllMedicalData() public view returns (MedicalData[] memory) {
        return medicalData;
    }
}