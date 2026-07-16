function getPosts(req, res) {

    res.json({

        success: true,

        message: "Fetched all posts successfully.",

        data: []

    });

}

module.exports = {

    getPosts,

};