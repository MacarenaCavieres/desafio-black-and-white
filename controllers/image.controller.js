import Jimp from "jimp";
import { nanoid } from "nanoid";
import path from "path";

const __dirname = import.meta.dirname;

const pathFile = path.join(__dirname, `../public/assets/img/${nanoid()}.jpeg`);

const getImage = async (req, res) => {
    try {
        const image = await Jimp.read("https://picsum.photos/1000/1000");

        const buffer = await image.resize(500, 500).quality(60).greyscale().getBufferAsync("image/jpeg");
        // const buffer = await image.resize(500, 500).quality(60).getBufferAsync("image/jpeg");

        await image.writeAsync(pathFile);

        res.header("Content-Type", "image/jpeg");
        res.send(buffer);
    } catch (error) {
        console.error(error);
        return res.send("algo ha salido mal");
    }
};

const postImage = async (req, res) => {
    try {
        const { imgURL } = req.body;

        const image = await Jimp.read(`${imgURL}`);

        await image.resize(250, 250).quality(70).greyscale().getBufferAsync("image/jpeg");

        await image.writeAsync(pathFile);

        return res.redirect("/");
    } catch (error) {
        console.error(error);
        return res.send("algo salio mal");
    }
};

export const imageMethod = {
    getImage,
    postImage,
};
