import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Education from "../../models/ejobs/eJobsAuth/SchoolAuth/EducationSchema.js";
import Address from "../../models/ejobs/eJobsAuth/SchoolAuth/AddressSchema.js";
import PersonalDetails from "../../models/ejobs/eJobsAuth/SchoolAuth/PDetailsSchema.js";
import SchoolLicense from "../../models/ejobs/eJobsAuth/SchoolAuth/SchoolLicense.js";


export const schoolEjobSignup = async(req, res) => {
    try {
        const PersonalDetailsLogic = async(req, res, next) => {
            const {schoolName, schoolEmail, schoolType, password, confirmPassword} = req.body
            console.log(req.body)
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            const newPersonalDetailsLogic = new PersonalDetails({schoolName, schoolEmail, schoolType, password, confirmPassword})
            try {
                if(!schoolName || !schoolEmail || ! schoolType || !password || confirmPassword){
                    return res.status(401).json({message: "please fill in the form correctly"})
                }
                if(password != confirmPassword){
                    return res.status(401).json({message: "the password does not match"})
                }

                const ifEmailExists = await PersonalDetails.findOne({schoolEmail})
                if(ifEmailExists){
                    return res.status(400).json({message: "sorry, email exists, please login"})
                }

                await newPersonalDetailsLogic.save()
                res.status(200).json({success: true, message: "your details are saved"})
              

            } catch (error) {
                next(error)
            }
        }

        const AddressLogic = async(req, res, next) => {
            console.log(req.body)
            const {address, state, LGA, country} = req.body
            try {
                if(!address || !state || ! LGA || !country ){
                    return res.status(400).json({message:"all fields must filled"})
                }
                await Address.create({address, state, LGA, country})
                res.status(200).json({
                    success: true,
                    message: " details is saved"
                })
            } catch (error) {
                next(error)
            }
            

        }


        const EducationLogic = async(req, res, next) => {
            console.log(req.body)
            const {schoolUser,userPhoneNumber, userEmail, userPosition, userAddress} = req.body
            try {
                if(!schoolUser || !userPhoneNumber || !userEmail || !userPosition || !userAddress ){
                    return res.status(400).json({message:"all fields must filled"})
                }
                await Education.create({schoolUser,userPhoneNumber, userEmail, userPosition, userAddress})
                res.status(200).json({
                    success: true,
                    message: " details is saved"
                })
            } catch (error) {
                next(error)
            }

        }

        const SchoolLicenseLogic = async(req, res, next) => {
            console.log(req.body)
            const {license, issuer, yearIssued} = req.body
            try {
                if(!license || !issuer || !yearIssued ){
                    return res.status(400).json({message:"all fields must filled"})
                }
                await Address.create({license, issuer, yearIssued})
                res.status(200).json({
                    success: true,
                    message: " details is saved"
                })
            } catch (error) {
                next(error)
            }
            

        }
    } catch (error) {
        console.log(error)
    }
}