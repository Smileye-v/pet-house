<?php


class FileManage
{
    /***************
     * @param $file /需要上传的文件
     * @param $types //允许上传的文件扩展名
     * @param $size //允许上传的文件最大size
     * @return string //新的文件名
     */


    public function upload($file, $types, $size)
    {
        $typeOK = false;
        foreach ($types as $type) {
            if ($file["type"] == $type) {
                $typeOK = true;
                break;
            }
        }

        if ($typeOK && ($file["size"] < $size)) {
            if ($file["error"] > 0) {//有错误发生
                exit;
            } else {
                $extendname = substr(strrchr($file["name"], '.'), 1);
                if (!isset($_SESSION)) {
                    session_start();
                }
                $filename = "photo" . $_SESSION['userId'] . '.' . $extendname;
                move_uploaded_file($file["tmp_name"], "../img/" . $filename);
                return $filename;
            }
        } else {
            return '';
        }

    }
}

?>