# merging the 2 branches in git

1. git pull origin main -> to get the latest main branch
2. git merge <branch-name> -> to merge the branch with the main branch
3. git push orgin main -> to push into the main branch

# migrating and pushing inside the DB

1. npx prisma migrate dev (abort the data loss)
2. npx prisma db push
