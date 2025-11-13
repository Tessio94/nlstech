import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
	name: z.string().min(2, "Ime mora imati barem 2 slova"),
	lastName: z.string().min(2, "Prezime mora imati barem 2 slova"),
	phone: z
		.string()
		.regex(/^\+?[0-9\s-]{7,20}$/, "Pogrešan oblik broja mobitela"),
	email: z.email("Neispravna email adresa"),
	message: z.string().min(5, "Molim pošaljite ispravnu poruku"),
});

export async function POST(request: Request) {
	try {
		const body = await request.json();

		const data = contactSchema.parse(body);

		const message = {
			// sets the name of the sender
			from: `NLS Tech <${process.env.EMAIL_FROM}>`,
			to: process.env.EMAIL_FROM,
			subject: "Novi upit sa NLSTech stranice",
			html: `
    <p>
        <span style="font-weight: bold;">Ime: </span> ${data.name}
    </p>
    <p>
        <span style="font-weight: bold;">Prezime: </span> ${data.lastName}
    </p>
    <p>
        <span style="font-weight: bold;">Broj mobitela: </span> ${data.phone}
    </p>
    <p>
        <span style="font-weight: bold;">Email: </span> ${data.email}
    </p>
    
    <p>
        <span style="font-weight: bold;">Poruka: </span>${data.message}
    </p>
    `,
			headers: {
				"X-Entity-Ref-ID": "newmail",
			},
		};

		const transporter = nodemailer.createTransport({
			host: "smtpout.secureserver.net",
			secure: true,
			port: 465,
			auth: {
				user: process.env.EMAIL_FROM,
				pass: process.env.PASS,
			},
		});

		await transporter.sendMail(message);
		return NextResponse.json(
			{ message: "Vaš zahtjev je uspješno poslan" },
			{ status: 200 }
		);
	} catch (err) {
		if (err instanceof z.ZodError) {
			const typeError = z.flattenError(err).fieldErrors;

			return NextResponse.json(
				{ error: Object.values(typeError) },
				{ status: 400 }
			);
		}
		if (err instanceof Error) {
			return NextResponse.json({ error: err.message }, { status: 500 });
		}
	}
}
