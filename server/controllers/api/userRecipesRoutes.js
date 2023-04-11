const router = require("express").Router();
const { Recipes, User, UserRecipes } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userRecipesData = await UserRecipes.findAll({});
    res.status(200).json(userRecipesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newUserRecipe = await UserRecipes.create(req.body);
    res.status(200).json(newUserRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

//DELETE bookmarked recipe
router.delete("/:id", async (req, res) => {
  try {
    const deleteUserRecipe = await UserRecipes.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteUserRecipe) {
      res.status(404).json({ message: "No recipe found with this id! " });
      return;
    }

    res.status(200).json(deleteUserRecipe);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
