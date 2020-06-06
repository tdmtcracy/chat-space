# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# chat-space DB設計
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false|
|passworld|string|null: false|

### Association
- has_many :groups
- has_many :messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|users_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|
|users_groups_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :users_groups