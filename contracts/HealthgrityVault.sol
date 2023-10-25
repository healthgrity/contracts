// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract HealthgrityVault {
    struct MedicalData {
        uint id;
        string data;
    }

    MedicalData[] private medicalData;

    function addMedicalData(uint _id, string memory _data) public {
        medicalData.push(MedicalData(_id, _data));
    }
}
