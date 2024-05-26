import { Test } from '../model/test.model.js';

const errorResponse = (res, error, code) => {
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    res.status(code).json({ message: errorMessage });
}

const getTests = async (req, res) => {
    try {
        const tests = await Test.find();
        res.status(200).json(tests);
    } catch (error) {
        errorResponse(res, error, 500);
    }
};

const getTestById = async (req, res) => {
    try {
        const test = await Test.findById(req.params.id);
        if (test) {
            res.status(200).json(test);
        } else {
            res.status(404).json({ message: 'Test not found' });
        }
    } catch (error) {
        errorResponse(res, error, 500);
    }
};

const createTest = async (req, res) => {
    try {
        const newTest = new Test(req.body);
        const savedTest = await newTest.save();
        res.status(201).json(savedTest);
    } catch (error) {
        errorResponse(res, error, 400);
    }
};

const updateTest = async (req, res) => {
    try {
        const updatedTest = await Test.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedTest) {
            res.status(200).json(updatedTest);
        } else {
            res.status(404).json({ message: 'Test not found' });
        }
    } catch (error) {
        errorResponse(res, error, 400);
    }
};

const deleteTest = async (req, res) => {
    try {
        const deletedTest = await Test.findByIdAndDelete(req.params.id);
        if (deletedTest) {
            res.status(200).json(deletedTest);
        } else {
            res.status(404).json({ message: 'Test not found' });
        }
    } catch (error) {
        errorResponse(res, error, 500);
    }
};

export { getTests, getTestById, createTest, updateTest, deleteTest };
