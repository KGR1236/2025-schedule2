const express = require('express');
const path = require('path');
const app = express();

// View engine 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일 설정
app.use(express.static(path.join(__dirname, 'public')));

// 달력 데이터 생성 함수
function getCalendarData(year, month) {
    const firstDay = new Date(year, month - 1, 1).getDay();
    const lastDate = new Date(year, month, 0).getDate();
    return { firstDay, lastDate };
}

// 월별 교육 데이터
const monthlyData = {
    1: {
        레이더시뮬레이션교육: 30,
        기초안전교육: 80,
        선박보안상급교육: 20
    },
    2: {
        레이더시뮬레이션교육: 30,
        기초안전교육: 90,
        선박보안상급교육: 20
    },
    3: {
        레이더시뮬레이션교육: 40,
        기초안전교육: 100,
        선박보안상급교육: 20
    },
    4: {
        레이더시뮬레이션교육: 40,
        기초안전교육: 100,
        선박보안상급교육: 20
    },
    5: {
        레이더시뮬레이션교육: 40,
        기초안전교육: 80,
        선박보안상급교육: 20
    },
    6: {
        레이더시뮬레이션교육: 40,
        기초안전교육: 80,
        선박보안상급교육: 20
    },
    7: {
        레이더시뮬레이션교육: 40,
        기초안전교육: 80,
        선박보안상급교육: 20
    },
    8: {
        레이더시뮬레이션교육: 40,
        기초안전교육: 90,
        선박보안상급교육: 20
    },
    9: {
        레이더시뮬레이션교육: 40,
        기초안전교육: 80,
        선박보안상급교육: 20
    },
    10: {
        레이더시뮬레이션교육: 40,
        기초안전교육: 70,
        선박보안상급교육: 20
    },
    11: {
        레이더시뮬레이션교육: 40,
        기초안전교육: 80,
        선박보안상급교육: 20
    },
    12: {
        레이더시뮬레이션교육: 30,
        기초안전교육: 70,
        선박보안상급교육: 20
    }
};

// 월별 교육 날짜 데이터
const monthlyEducationDates = {
    1: {
        red: [[6, 10], [27, 31]],
        blue: [[13, 17]],
        green: [[22, 23]]
    },
    2: {
        red: [[3, 7], [24, 28]],
        blue: [[10, 14]],
        green: [[19, 20]]
    },
    3: {
        red: [[3, 7], [24, 28], [31, 31]],
        blue: [[10, 14]],
        green: [[19, 20]]
    },
    4: {
        red: [[1, 4], [21, 25]],
        blue: [[7, 11]],
        green: [[16, 17]]
    },
    5: {
        red: [[5, 9], [26, 30]],
        blue: [[12, 16]],
        green: [[21, 22]]
    },
    6: {
        red: [[2, 6], [23, 27], [30, 30]],
        blue: [[9, 13]],
        green: [[18, 19]]
    },
    7: {
        red: [[1, 4], [21, 25]],
        blue: [[7, 11]],
        green: [[16, 17]]
    },
    8: {
        red: [[4, 8], [25, 29]],
        blue: [[11, 15]],
        green: [[20, 21]]
    },
    9: {
        red: [[1, 5], [22, 26]],
        blue: [[8, 12]],
        green: [[17, 18]]
    },
    10: {
        red: [[6, 10], [27, 31]],
        blue: [[13, 17]],
        green: [[22, 23]]
    },
    11: {
        red: [[3, 7], [24, 28]],
        blue: [[10, 14]],
        green: [[19, 20]]
    },
    12: {
        red: [[1, 5], [22, 26]],
        blue: [[8, 12]],
        green: [[17, 18]]
    }
};

// 라우트 설정
app.get('/', (req, res) => {
    const year = 2025;
    const month = 1;
    const calendar = getCalendarData(year, month);
    
    res.render('index', {
        year,
        month,
        calendar,
        data: monthlyData[month],
        educationDates: monthlyEducationDates[month]
    });
});

// 월별 데이터 API
app.get('/api/month/:month', (req, res) => {
    const month = parseInt(req.params.month);
    res.json({
        data: monthlyData[month],
        educationDates: monthlyEducationDates[month]
    });
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다`);
});