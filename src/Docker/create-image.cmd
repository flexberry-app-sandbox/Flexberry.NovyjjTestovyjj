docker build --no-cache -f SQL\Dockerfile.PostgreSql -t novyjj_testovyjj/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t novyjj_testovyjj/app ../..
