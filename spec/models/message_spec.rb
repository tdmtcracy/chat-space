require 'rails_helper'

RSpec.describe Message, type: :model do
  describe '#create' do
    context "messageを保存できる場合" do
      it "contentがあれば保存できる事" do
        expect(build(:message, image: nil)).to be_valid
      end

      it 'imageがあれば保存できる事' do
        expect(build(:message, content: nil)).to be_valid
      end

      it "contentとimageがあれば保存できる事" do
        expect(build(:message)).to be_valid
      end
    end

    context "messageを保存できない場合" do
      it "contentとimageが両方空だと保存できない事" do
        expect(build(:message, content: nil, image: nil,)).to_not be_valid
      end

      it "group_idがないと保存できない事" do
        expect(build(:message, group_id: nil)).to_not be_valid
      end

      it "user_idがないと保存できない事" do
        expect(build(:message, user_id: nil)).to_not be_valid
      end
    end
  end
end