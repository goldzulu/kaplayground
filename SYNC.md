# First time setup
# 1. Fork the kaplay repository on GitHub
# 2. Update the submodule URL to your fork
git config --file=.gitmodules submodule.kaplay.url https://github.com/YOUR_USERNAME/kaplay.git
git submodule sync

# Then for making changes
cd kaplay
git add .
git commit -m "Your changes description"
git push origin master  # pushes to your fork

# Go back to main project
cd ..
git add kaplay
git commit -m "Update kaplay submodule to include new changes"
git push