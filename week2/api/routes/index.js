var express = require('express');
var router = express.Router();
var mongod = require('mongodb-curd');
var db = 'record';
var col = 'income';
var col1 = 'pay';

/* GET home page. */
router.post('/api/getinsert', function(req, res, next) {
    var obj = req.body;
    if (!obj.data && !obj.fenlei && !obj.jine && !obj.chengyuan && !obj.beizhu) {
        res.json({ code: 3, msg: '参数为空' })
    } else {
        mongod.insert(db, col, obj, function(result) {
            if (!result) {
                res.json({ code: 0, msg: '插入失败' })
            } else {
                res.json({ code: 1, msg: '插入成功' })
            }
        })
    }
});

router.post('/api/payinsert', function(req, res, next) {
    var obj = req.body;
    if (!obj.data && !obj.fenlei && !obj.jine && !obj.chengyuan && !obj.beizhu) {
        res.json({ code: 3, msg: '参数为空' })
    } else {
        mongod.insert(db, col1, obj, function(result) {
            if (!result) {
                res.json({ code: 0, msg: '插入失败' })
            } else {
                res.json({ code: 1, msg: '插入成功' })
            }
        })
    }
});

router.post('/api/getfind', function(req, res, next) {
    mongod.find(db, col, function(result) {
        if (!result) {
            res.json({ code: 0, msg: '查询错误' })
        } else {
            res.json({ code: 1, data: result })
        }
    })
});

module.exports = router;