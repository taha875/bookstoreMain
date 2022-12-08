import React from "react";
import Input from "../../Reuseabletable/Input/Input";
import TextArea from "../../Reuseabletable/TextArea/TextArea";
import Icon from "../../Svg/Svg_reuse/icons";
function DisplayCard({ data, update, page }) {
  console.log(data);
  return (
    <>
      <div className="w-full h-full mt-8 flex items-start gap-x-8">
        <div className="h-96 w-96 rounded-md flex flex-shrink-0 overflow-hidden">
          <img src={data.img} className="w-full h-full object-cover" />
        </div>
        <div className="w-full">
          <div className="flex items-center w-full gap-x-8">
            <Input
              label={data.bookname + " Name"}
              placeholder={data.bookname}
              name={"bookname"}
              disabled={!update}
            />
            <Input
              label={"Author"}
              placeholder={data.author}
              disabled={!update}
            />
          </div>
          {page != "Nasheed" && page != "Poster" && (
            <>
              <div
                id="translatediv"
                className="flex items-center w-full gap-8 py-8"
              >
                <div className="flex items-center w-full gap-8 py-8">
                  <Input
                    label={"Translated By"}
                    placeholder={data.translator}
                    disabled={!update}
                  />
                  <Input
                    label={"Authenticated By"}
                    placeholder={data.authenticatedBy}
                    disabled={!update}
                  />
                </div>
              </div>
              <div className="flex items-center gap-x-8">
                <div className="w-1/2">
                  <Input
                    label={"Price"}
                    placeholder={data.bookPrice ? `${data.bookPrice}` : `Free`}
                    disabled={!update}
                  />
                </div>
                <div className="flex items-center gap-x-2 mt-9">
                  <Icon iconparam={"Info"} />
                  <p className="text-sm text-[#9e9e9e]">
                    Please leave Free if <span className="font-bold">Free</span>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mt-4">
        <TextArea
          disabled={!update}
          name={"Description"}
          placeholder={data.bookDescription}
        />
      </div>
    </>
  );
}

export default DisplayCard;
