// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract HealthgrityRepository {
    struct MedicalData {
        uint id;
        string data;
    }

    MedicalData[] private medicalData;

    function storeMedicalData(uint _id, string memory _data) public {
        medicalData.push(MedicalData(_id, _data));
    }
}
