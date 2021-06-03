const { response } = require('express');
const Bill = require('../models/bills')

const getBills = async ( req, res = response ) => {
    try {
        const bills = await Bill.find()
        res.json({
            ok: true,
            msg: 'Invoice list',
            bills
        });
    } catch (error) {
        res.status( 500 ).json({
            ok: false,
            msg: "Unexpected error, talk to your ADMIN"
        });
        console.log( error );
    }
};

const getBill = async ( req, res = response ) => {
    try {
        const bill = await Bill.findById( req.params.id )
        res.json({
            ok: true,
            msg: 'Bill details',
            bill
        });
    } catch (error) {
        res.status( 500 ).json({
            ok: false,
            msg: "Unexpected error, talk to your ADMIN"
        });
        console.log( error );
    }
};

const createBill = async ( req, res = response ) => {
    try {
        const newBill = new Bill( req.body );
        await newBill.save();
        res.json({
            ok: true,
            msg: 'Bill created',
            newBill
        });
    } catch (error) {
        res.status( 500 ).json({
            ok: false,
            msg: "Unexpected error, talk to your ADMIN"
        });
        console.log( error );
    }
};

const updateBill = async ( req, res = response ) => {
    try {
        const billUpdated = await Bill.findByIdAndUpdate( req.params.id, req.body );
        res.json({
            ok: true,
            msg: 'Bill updated',
            billUpdated
        });
    } catch (error) {
        res.status( 500 ).json({
            ok: false,
            msg: "Unexpected error, talk to your ADMIN"
        });
        console.log( error );
    }
};

const deleteBill = async ( req, res = response ) => {
    try {
        await Bill.findByIdAndDelete( req.params.id )
        res.json({
            ok: true,
            msg: 'Deleted bill',
        });
    } catch (error) {
        res.status( 500 ).json({
            ok: false,
            msg: "Unexpected error, talk to your ADMIN"
        });
        console.log( error );
    }
};

module.exports = {
    getBill,
    getBills,
    createBill,
    updateBill,
    deleteBill
}