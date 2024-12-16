const express = require("express");
const port = 2008;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded())

let books = [
    { id: "1", name: "The Telling Image", author: "Lois Farfel Stark ", publishDate: "6 February  2018", pages: "200", language: "English", image: "https://books.google.co.in/books/publisher/content?id=XbpJDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U02vzEomT0kdWa1cBoRdn8YPk3bvQ&w=1280", price: "₹299" },
    { id: "2", name: "That's Not My Name!", author: "Anoosha Syed ", publishDate: "28 July 2022", pages: "32", language: "English", image: "https://books.google.co.in/books/publisher/content?id=qCNhEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3o8vRZHyDXSbAsG6HjC4PNRxDGfw&w=1280", price: "₹99" },
    { id: "3", name: "Book Design", author: "Andrew Haslam", publishDate: "2006", pages: "256", language: "English", image: "https://books.google.co.in/books/content?id=_Ri63jEKPfgC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72r3WwhSBZQiBBH7D5bd5Tyd3OXU-nKD2p20FO7D6-chwyvrjNHTUDYnUQB94oz8s6_6mJdjWAgIEPanE0XLGRbvoHlcpyCVn7LZ1Upv_Iw5saEqK4hEhPNl1HlZj5ieMNLxSI5", price: "₹259" },
    { id: "4", name: "The Beautiful Roses", author: "Swapna Rajput", publishDate: "5 January 2015", pages: "170", language: "Hindi Language English Script", image: "https://books.google.co.in/books/publisher/content?id=XxCqCQAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE713yi3rc4jWGUW3bJbFdLovfb1K1Z7DbQ_5_KnYs78o3d-joyEgXruUFdt9WrJkXorgPxI3skTLelpG1izbpBODvOsqlzAcyGrC0m-fkBz17L7LbtZWwnCXuEa_0SLmS2k2EQDq", price: "₹149" },
    { id: "5", name: "Time Management", author: "Dr Sudhir Dixit", publishDate: "2012", pages: "130", language: "English", image: "https://books.google.co.in/books/publisher/content?id=oYOGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73eVoI_mGaVfgP9Lfju7pPjbDNqMUe3v8jfF_OsvZHQI7EXS5ianPHGdYKswDzTnBcft4SlnUhZZ6rGBU2Z_NV2iBAHWJ4o4h1oLvt6TsTXhlh9ZEnl9wBydqiNzWV0a8GR2B7u", price: "₹199" },
    { id: "6", name: "Images of Delhi", author: "Ramesh Chandra Dhussat", publishDate: "12 June 2023", pages: "150", language: "English", image: "https://books.google.co.in/books/publisher/content?id=LO_EEAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71fLp3d9QsMTj6FT2VQfrp4Hl2zXY8FELHjRJ6w2TSuqytt-fs6GCNi79SW4J6O2q2MmxLmKEKycvEh7d0QwTwakehDHl8fbbIMZgqMsqUEx1Ed4IX_HHY1wdjnRWK_ueemoiAs", price: "₹179" },
    { id: "7", name: "Something I'm Waiting to Tell You", author: "Shravya Bhinder", publishDate: "14 February 2022", pages: "248", language: "English", image: "https://books.google.co.in/books/publisher/content?id=FnJdEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1ROc3BJS_GEIe_V7WZEwVLxbEyPQ&w=1280", price: "₹239" },
    { id: "8", name: "Delhi Is Not Far", author: "Ruskin Bond", publishDate: "15 May 2017", pages: "128", language: "English", image: "https://books.google.co.in/books/publisher/content?id=RcEDAQAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1-p5PHa3vqpfGz51n3CmQ5c5xp9A&w=1280", price: "₹119" },
    { id: "9", name: "26/11 : The Attack on Mumbai", author: "Vir Sanghvi", publishDate: "20 March 2009", pages: "256", language: "English", image: "https://books.google.co.in/books/content?id=TDaeRERv1CgC&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1v9foNid2hAIfXJTxkTUKrZx9L5A&w=1280", price: "₹239" },
    { id: "10", name: "Black Tornado", author: "Sandeep Unnithan", publishDate: "10 April 2020", pages: "252", language: "English", image: "https://books.google.co.in/books/publisher/content?id=TKzTDwAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2IZRIy940dOWdGa4AfPFg3KrB2Ww&w=1280", price: "₹249" },
    { id: "11", name: "Ahmedabad : A City in the World", author: "Amrita Shah", publishDate: "28 July 2015", pages: "198", language: "English", image: "https://m.media-amazon.com/images/I/81J1nx1N4iL._AC_UF350,350_QL50_.jpg", price: "₹199" },
    { id: "12", name: "Ahmedabad : City with a Past", author: "Esther David", publishDate: "10 February 2016", pages: "148", language: "English", image: "https://books.google.co.in/books/publisher/content?id=lrOSCwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3sGfAgucn2Areq_ky9UIeqNP8njg&w=1280", price: "₹129" },
    { id: "13", name: "India Guide Gujarat", author: "Anjali H. Desai", publishDate: "November 2006", pages: "400", language: "English", image: "https://books.google.co.in/books/content?id=gZRLGZNZEoEC&pg=PP2&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0gu-mxBD5I7mCs7adaCuCRXgz4FQ&w=1280", price: "₹389" },
    { id: "14", name: "Surat: Fall of a Port", author: "Moin Mir", publishDate: "8 February 2018", pages: "248", language: "English", image: "https://books.google.co.in/books/publisher/content?id=paohEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U30rTVnQ032MKeiyfTosnySzDnc4g&w=1280", price: "₹229" },
    { id: "15", name: "The Golden Book of India", author: "Sir Roper Lethbridge", publishDate: "2 April 1900", pages: "366", language: "English", image: "https://books.google.co.in/books/content?id=zykYAAAAYAAJ&pg=PR3&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U29Q4FzbZL4mhxOrsM62GjhycYvKg&w=1025", price: "₹349" },
    { id: "16", name: "India, that is Bharat", author: "J Sai Deepak", publishDate: "15 August 2021", pages: "484", language: "English", image: "https://books.google.co.in/books/publisher/content?id=jIM3EAAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2RE0WVw0JYzL7R4vwwQ_RrQpdZLg&w=1280", price: "₹469" },
    { id: "17", name: "India Grows at Night", author: "Gurcharan Das", publishDate: "17 September 2012", pages: "320", language: "English", image: "https://books.google.co.in/books/content?id=DcWKNFF9K6EC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2vUjE9iif3cmB3ffMshFXUv9Jh_w&w=1280", price: "₹299" },
    { id: "18", name: "History of British Rule in India", author: "Edward Thompson", publishDate: "17 February 1999", pages: "220", language: "English", image: "https://books.google.co.in/books/content?id=93fnssiWvjoC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1RfVBsTsIPBx0-y3RdZg3hREaXYQ&w=1280", price: "₹209" },
    { id: "19", name: "Malevolent Republic", author: "K. S. Komireddi", publishDate: "7 July 2019", pages: "259", language: "English", image: "https://books.google.co.in/books/publisher/content?id=kfJQEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1omNYsDrQsYCSfPK5QyqN1v69QwA&w=1280", price: "₹239" },
    { id: "20", name: "International Relations of Asia", author: "Michael Yahuda", publishDate: "13 March 2014", pages: "452", language: "English", image: "https://books.google.co.in/books/publisher/content?id=gzwfAwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2lpjEFNzwdvBnJJ4DIF2wMWv3wQg&w=1280", price: "₹439" }
]

app.get("/", (req, res) => {
    res.render("index", { books });
})
app.post("/addData", (req, res) => {
    req.body.id = String(books.length + 1);
    books.push(req.body);
    res.redirect("/");
})

app.get("/editData/:id", (req, res) => {
    let singleData = books.find((e) => e.id == req.params.id);
    res.render("edit", { singleData })
})

app.post("/updateData", (req, res) => {
    books.map((e) => {
        if (e.id == req.body.id) {
            (e.id = req.body.id),
                (e.name = req.body.name),
                (e.author = req.body.author),
                (e.publishDate = req.body.publishDate),
                (e.pages = req.body.pages),
                (e.price = req.body.price);
        }
        else {
            e;
        }
    })
    res.redirect("/")
})

app.get("/deleteData/:id", (req,res)=>{
    let deleteRecord = books.filter((e)=> e.id !== req.params.id);
    books = deleteRecord;
    res.redirect("/");
    
})
app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Started on port" + port)
})