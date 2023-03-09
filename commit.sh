#!/bin/bash

RED='\033[0;31m'
Black='\033[0;30m'
GREEN='\033[0;32m'
UGreen='\033[4;32m'
UYellow='\033[4;33m'
On_Green='\033[42m'
Yellow='\033[0;33m'
NC='\033[0m' # No Color

echo "${UGreen}Commit methods(Коммит методы):${NC}"

$method
options=(
  "add - Добавление нового"
  "change - Обновление существующего файла(ов)"
  "update - 'НЕЗНАЧИТЕЛЬНОЕ' обновление существующего файла(ов)"
  "remove - Удаление строк внутри файла(ов)"
  "delete - Удаление файла(ов)"
  "comment - Добавление комментариев"
  "fix - Любое исправление файла(ов)"
  "bug-fix - Исправление бага(ов)"
  "custom-method - Другое назавние коммита"
  "Quit - Выход"
  )


select option in "${options[@]}"
do
    case $option in
        "add - Добавление нового")
            method="add"
            break
            ;;
        "change - Обновление существующего файла(ов)")
            method="change"
            break
            ;;
        "update - 'НЕЗНАЧИТЕЛЬНОЕ' обновление существующего файла(ов)")
            method="update"
            break
            ;;
        "remove - Удаление строк внутри файла(ов)")
            method="remove"
            break
            ;;
        "delete - Удаление файла(ов)")
            method="delete"
            break
            ;;
        "comment - Добавление комментариев")
            method="comment"
            break
            ;;
        "fix - Любое исправление файла(ов)")
            method="fix"
            break
            ;;
        "bug-fix - Исправление бага(ов)")
            method="bug-fix"
            break
            ;;
        "custom-method - Другое назавние коммита")
            read -p "custom-method:" method
            break
            ;;
        "Quit - Выход")
            exit 0
            ;;
        *) echo "Incorrect input(Некорректный ввод): $REPLY";;
    esac
done

echo "${UGreen}Commit name separated by a dash(Название коммита через тире) - (my-example-commit):${NC}"
read -p "git commit -m $method:" desc

commit=$method:$desc

git add .
git commit -m "$commit"