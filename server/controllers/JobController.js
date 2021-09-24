const { Job } = require ('../models')

class JobController {
    static async showJobs(req, res) {
      // const currentPage = req.query.page
      // const perPage = req.query.perPage
      try {
        let job = await Job.findAll({
        order: [["id", "ASC"]],
        });
        res.status(200).json(job);
      } catch (err) {
        res.status(500).json(err);
      }
    }
//     static async showJobsById(req, res) {
//       try {
//         const id = +req.params.id;
//         // console.log(id)
//         let Job = await Job.findOne({
//           where: {id},
//             include: 
//                 [User,Job_Content,Job_Comment] 
//           });
//         res.status(200).json(Job);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     }

//     static async addJobs(req, res) {
//         try {
//           const { name,description,category,sub_category,price,duration,total_materi,level,author,rating,student,UserId} = req.body;
//           let filename = req.file.filename;  
//           let Job = await Job.create({
//             name,description,category,sub_category,price,duration,total_materi,level,author,rating,student,UserId
//           });
//           let filesize = req.file.size;
//           let filetype = req.file.mimetype;
//           let img = await Job_Content.create(
//             { filename, filesize, filetype, primary:true, JobId:Job.id }
//           );
          
//         //   const UserId = req.UserDetail.id
//           res.status(201).json (Job);
//         } catch (err) {
//           res.status(500).json(err);
//         }
//       }

//     static async deleteJobs(req, res) {
//     try {
//           const id = +req.params.id;
//           let result = await Job.destroy({
//             where: { id },
//           });
//           res.status(200).json(result)
//         } catch (err) {
//           res.status(500).json(err);
//         }
//       }
    
//     static async updateJobs(req, res) {
//     try {
//       const id = +req.params.id;
//       const { name,description,category,sub_category,price,duration,total_materi,level,author,rating,student } = req.body;
//       let Job = await Job.update(
//         {
//           name,description,category,sub_category,price,duration,total_materi,level,author,rating,student
//         },
//         {
//           where: { id },
//         }
//       );
//       res.status(200).json (Job);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }

}

module.exports = JobController;