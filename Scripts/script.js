let imageSets = [
    {
        id: 1,
        name: 'Andrew Smith',
        title: 'Innocence',
        images: [
            'https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            'https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
            'https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
            'https://images.unsplash.com/photo-1492680967812-4b9226a079de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
        ],
    },
    {
        id: 2,
        name: 'Jane Doe',
        title: 'Nature Adventures',
        images: [
            'https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
            'https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            'https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            'https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80'
        ],
    },
    {
        id: 3,
        name: 'Irna Tawsen',
        title: 'Faces of the World',
        images: [
            'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
            'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
            'https://images.unsplash.com/photo-1604186837056-8e7c2867b6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        ],
    },
    {
        id: 4,
        name: 'Mark Dale',
        title: 'Wild Animals',
        images: [
            'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
            'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80',
            'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
            'https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        ]
    }
];


//loads cards from imageSets object array

const loadCards = () => {
    imageSets.forEach((imageSet) => {
        const { title, name, images, id } = imageSet;
        createGridItem(title, name, images[0], id);
    });
};


//validate form upon submission

function validateForm() {
    let name = document.forms["submitForm"]["name"].value;
    let title = document.forms["submitForm"]["title"].value;
    let image1 = document.forms["submitForm"]["image1"].value;
    if (name === "" || title === "" || image1 === "") {
        alert("Name, Title and URL One must be filled out");
        return false;
    }
    return true;
};


//Submit a new image to the imageSets array

const submitImages = () => {
    event.preventDefault();
    if (validateForm()) {
        const name = document.getElementById("name").value;
        const title = document.getElementById("title").value;
        const images = [
            document.getElementById("image1").value,
            document.getElementById("image2").value,
            document.getElementById("image3").value,
            document.getElementById("image4").value,
            document.getElementById("image5").value
        ];
        const refinedImages = images.filter(image => image !== "");
        const newImageSet = {
            id: imageSets.length + 1,
            name: name,
            title: title,
            images: refinedImages
        }

        const nameMatch = imageSets.find(imageSet => imageSet.name === name);

        if (nameMatch) {
            alert(name + " already exists, click 'see more' to view their gallery");
            for (let i = 0; i < refinedImages.length; i++) {
                nameMatch.images.push(refinedImages[i]);
            }
            return;
        } else {
            imageSets.push(newImageSet);
            createGridItem(title, name, images[0], newImageSet.id);
        }
    }
};


//create grid items

const parentContainer = document.getElementById("grid-container");

function createGridItem(photoTitle, name, URL, index) {

    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    const image = document.createElement("img");
    image.classList.add("grid-image");
    image.src = URL;
    image.setAttribute("alt", "image");
    gridItem.appendChild(image);

    const gridItemInfo = document.createElement("div");
    gridItemInfo.classList.add("grid-item-info");

    const h2 = document.createElement("h2");
    h2.innerHTML = `${photoTitle} - ${name}`;
    gridItemInfo.appendChild(h2);

    const a = document.createElement("a");
    a.textContent = "see more";
    a.id = index;
    a.addEventListener("click", function () {
        loadDetailsPage(a.id)
    });
    a.classList.add("see-more");

    gridItemInfo.appendChild(a);

    gridItem.appendChild(gridItemInfo);

    parentContainer.appendChild(gridItem);
};


//load details page

function loadDetailsPage(id) {
    event.preventDefault();
    window.location.href = `details.html?id=${id}`;
};


//load details page

let counter = 1;
let urlParams = new URLSearchParams(window.location.search); // Get the query parameters from the URL
let imageId = urlParams.get("id"); // Get the value of the "id" parameter
const imageCounterElement = document.getElementById("image-counter");
const titleElement = document.getElementById("title");
const nameElement = document.getElementById("name");
const imageElement = document.querySelector("img");


// next and previous buttons

function next() {
    if (counter < imageSets[imageId - 1].images.length) {
        counter++;
        setCounter();
    } else {
        counter = 1;
        setCounter();
    }
};

function previous() {
    if (counter === 1) {
        counter = imageSets[imageId - 1].images.length;
        setCounter();
    } else {
        counter--;
        setCounter();
    }
};


// loads infoprmation into details.html when page loads

function loadInformation() {
    const pageTitle = document.querySelector("title");
    titleElement.innerHTML = imageSets[imageId - 1].title;
    nameElement.innerHTML = imageSets[imageId - 1].name;
    pageTitle.innerHTML = imageSets[imageId - 1].title + " - " + imageSets[imageId - 1].name;
    setCounter();
}


// sets counter and image source

function setCounter() {
    imageCounterElement.innerHTML = counter + " of " + imageSets[imageId - 1].images.length;
    imageElement.src = imageSets[imageId - 1].images[counter - 1];
};


// home submission button

function loadSubmissions() {
    window.location.href = "/HTML/submissions.html";
};